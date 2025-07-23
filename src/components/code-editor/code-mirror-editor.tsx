"use client";

import { useEffect, useRef, useCallback } from "react";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { useTheme } from "next-themes";

interface CodeMirrorEditorProps {
  value: string;
  language: string;
  
  onChange: (value: string) => void;
}

export function CodeMirrorEditor({ value, language, onChange }: CodeMirrorEditorProps) {
  const editor = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const { theme } = useTheme();

  // Memoize the language extension getter to prevent unnecessary re-renders
  const getLanguageExtension = useCallback(() => {
    switch (language) {
      case 'javascript':
        return javascript({ jsx: true });
      case 'html':
        return html();
      case 'css':
        return css();
      case 'json':
        return json();
      default:
        return javascript();
    }
  }, [language]);

  // Initialize editor
  useEffect(() => {
    if (!editor.current) return;

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        getLanguageExtension(),
        theme === 'dark' ? oneDark : [],
        EditorView.updateListener.of((update) => {
          if (update.changes.length > 0) {
            onChange(update.state.doc.toString());
          }
        }),
        EditorView.theme({
          "&": {
            height: "100%",
            fontSize: "14px",
            fontFamily: "var(--font-jetbrains-mono)"
          },
          ".cm-editor": {
            height: "100%"
          },
          ".cm-scroller": {
            height: "100%"
          }
        })
      ]
    });

    view.current = new EditorView({
      state,
      parent: editor.current
    });

    return () => {
      view.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, theme, getLanguageExtension]);

  // Handle external value changes
  useEffect(() => {
    if (view.current && view.current.state.doc.toString() !== value) {
      view.current.dispatch({
        changes: {
          from: 0,
          to: view.current.state.doc.length,
          insert: value
        }
      });
    }
  }, [value]);

  return <div ref={editor} className="h-full w-full" />;
}