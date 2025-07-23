"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload as UploadIcon,
  Link,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [figmaUrl, setFigmaUrl] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [tabValue, setTabValue] = useState<"upload" | "figma">("upload");
  const [aiModel, setAiModel] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast.success("File uploaded successfully!");
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      toast.success("File uploaded successfully!");
    } else {
      toast.error("Please upload a valid image file.");
    }
  }, []);

  const handleConvert = async () => {
    if (tabValue === "upload" && (!selectedFile || !aiModel || !description)) {
      toast.error("Please upload an image, select an AI model, and provide a description.");
      return;
    }
    if (tabValue === "figma" && !figmaUrl) {
      toast.error("Please provide a Figma URL.");
      return;
    }

    setIsConverting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate conversion
      toast.success("Conversion completed! Redirecting to code editor...");
      router.push("/code-editor"); // Immediate navigation
    } catch (error) {
      toast.error("Conversion failed. Please try again.");
      console.error("Conversion error:", error);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="h-full w-full overflow-x-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl p-4"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Transform Your Designs</h1>
          <p className="text-muted-foreground">
            Upload your design files or paste Figma links to generate
            production-ready code
          </p>
        </div>

        <Card className="border-2 border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Start New Conversion</span>
            </CardTitle>
            <CardDescription>
              Choose your design source and let AI convert it to clean,
              responsive code
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs
              value={tabValue}
              onValueChange={(value) => setTabValue(value as "upload" | "figma")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload Image</TabsTrigger>
                <TabsTrigger value="figma">Figma Link</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait" initial={false}>
                {tabValue === "upload" && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <TabsContent value="upload" forceMount>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="ai-model" className="mb-2 block">
                            AI Model
                          </Label>
                          <Select value={aiModel} onValueChange={setAiModel}>
                            <SelectTrigger id="ai-model">
                              <SelectValue placeholder="Select AI model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="grok1">Grok 1</SelectItem>
                              <SelectItem value="chatgpt">ChatGPT</SelectItem>
                              <SelectItem value="gemini">Gemini</SelectItem>
                              <SelectItem value="claude">Claude</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="description" className="mb-2 block">
                            Description
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your design or specific requirements..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="file-upload" className="mb-2 block">
                            Design File
                          </Label>
                          <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                              isDragOver
                                ? "border-primary bg-primary/5"
                                : "border-muted-foreground/25 hover:border-muted-foreground/50"
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <input
                              id="file-upload"
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />

                            <div className="flex flex-col items-center space-y-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <UploadIcon className="w-6 h-6 text-primary" />
                              </div>

                              {selectedFile ? (
                                <div className="text-center">
                                  <p className="font-medium text-primary">
                                    {selectedFile.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {(selectedFile.size / 1024 / 1024).toFixed(2)}{" "}
                                    MB
                                  </p>
                                </div>
                              ) : (
                                <div className="text-center">
                                  <p className="font-medium">
                                    Drop your design file here
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    or click to browse (PNG, JPG, GIF up to 10MB)
                                  </p>
                                </div>
                              )}

                              <Button
                                variant="outline"
                                onClick={() =>
                                  document.getElementById("file-upload")?.click()
                                }
                              >
                                <ImageIcon className="w-4 h-4 mr-2" />
                                Choose File
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </motion.div>
                )}

                {tabValue === "figma" && (
                  <motion.div
                    key="figma"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <TabsContent value="figma" forceMount>
                      <div className="space-y-4">
                        <Label htmlFor="figma-url">Figma Public URL</Label>
                        <div className="flex space-x-2">
                          <div className="flex-1">
                            <Input
                              id="figma-url"
                              type="url"
                              placeholder="https://www.figma.com/file/..."
                              value={figmaUrl}
                              onChange={(e) => setFigmaUrl(e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <Button variant="outline" size="icon">
                            <Link className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Make sure your Figma file is publicly accessible or
                          shared with view permissions
                        </p>
                      </div>
                    </TabsContent>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8">
                <Button
                  onClick={handleConvert}
                  disabled={isConverting || (tabValue === "upload" ? (!selectedFile || !aiModel || !description) : !figmaUrl)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
                  size="lg"
                >
                  {isConverting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Sparkles className="w-5 h-5 mr-2" />
                  )}
                  {isConverting ? "Converting..." : "Convert to Code"}
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}