// app/blog/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Calendar, User, Tag, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock blog data - replace with your actual data fetching
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
    content: "",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Alex Johnson",
    image: "/blog/nextjs.jpg",
    tags: ["Next.js", "React", "Web Development"],
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Mastering shadcn/ui Components",
    excerpt: "Discover how to leverage shadcn/ui to build beautiful, accessible user interfaces with minimal effort.",
    content: "",
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Sarah Chen",
    image: "/blog/shadcn.jpg",
    tags: ["UI/UX", "shadcn/ui", "Design"],
    category: "Guide"
  },
  {
    id: 3,
    title: "Building a Modern Blog with Tailwind CSS",
    excerpt: "Step-by-step guide to creating responsive and beautiful blog layouts using Tailwind CSS.",
    content: "",
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Mike Rodriguez",
    image: "/blog/tailwind.jpg",
    tags: ["Tailwind", "CSS", "Design"],
    category: "Tutorial"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Advanced techniques to optimize your React applications for better performance and user experience.",
    content: "",
    date: "2023-12-28",
    readTime: "10 min read",
    author: "Emma Wilson",
    image: "/blog/react.jpg",
    tags: ["React", "Performance", "JavaScript"],
    category: "Advanced"
  },
  {
    id: 5,
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices to write more maintainable and robust code.",
    content: "",
    date: "2023-12-20",
    readTime: "7 min read",
    author: "David Kim",
    image: "/blog/typescript.jpg",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    category: "Guide"
  },
  {
    id: 6,
    title: "State Management in 2024",
    excerpt: "Comparing modern state management solutions and when to use each one in your applications.",
    content: "",
    date: "2023-12-15",
    readTime: "9 min read",
    author: "Lisa Thompson",
    image: "/blog/state.jpg",
    tags: ["State", "React", "Architecture"],
    category: "Comparison"
  }
];

const categories = [
  { name: "All", count: 12 },
  { name: "Tutorial", count: 5 },
  { name: "Guide", count: 3 },
  { name: "Advanced", count: 2 },
  { name: "Comparison", count: 2 }
];

const popularTags = [
  "Next.js", "React", "TypeScript", "shadcn/ui", 
  "Tailwind", "Performance", "UI/UX", "JavaScript"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Insights & Tutorials
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest web development trends, tutorials, and best practices 
              from our team of experts.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12 rounded-full border-border"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <div className="text-sm text-muted-foreground">
                {blogPosts.length} articles
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder-image.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="w-full justify-between"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest articles delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe</Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Featured Post */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Featured Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="/blog/featured.jpg"
                      alt="Featured post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold line-clamp-2">
                    <Link href="/blog/featured" className="hover:text-primary transition-colors">
                      The Future of Web Development in 2024
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 8, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
