import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Play, Image as ImageIcon, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Bio-Secure Facility",
    category: "Infrastructure",
    url: "/farm-1.jpg", // Replace with your assets
    size: "large", 
  },
  {
    id: 2,
    type: "video",
    title: "Processing Line Walkthrough",
    category: "Operations",
    url: "/video-preview-1.jpg", // Thumbnail
    videoUrl: "https://www.youtube.com/embed/your-id", 
    size: "small",
  },
  {
    id: 3,
    type: "image",
    title: "Cobb 500 Hatchery",
    category: "Genetics",
    url: "/hatchery.jpg",
    size: "small",
  },
  {
    id: 4,
    type: "image",
    title: "2,000Ha Feed Plantation",
    category: "Sustainability",
    url: "/field.jpg",
    size: "medium",
  },
  // Add more items here...
];

const Blog = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-xs uppercase tracking-[0.5em] mb-6 font-black">Media Library</p>
            <h1 className="font-display text-6xl md:text-8xl text-[#4F3C1
