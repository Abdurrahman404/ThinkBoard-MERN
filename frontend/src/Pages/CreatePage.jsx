import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../lib/axios.js";
 

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await  api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
  // Use a softer, more intentional background color for the page
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    {/* Header Section */}
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            // Use a more distinct "Back" button style
            className="btn btn-ghost btn-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {/* The ArrowLeftIcon component is assumed to be available */}
            <ArrowLeftIcon className="size-5" />
            <span className="hidden sm:inline">Back to Notes</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 hidden sm:block">
            Create New Note
          </h1>
          
        
         
        </div>
      </div>
    </header>

    {/* Main Content Area */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Increased max-width for better writing space */}
      <div className="max-w-3xl mx-auto">
        
        {/* Title for small screens */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:hidden text-center flex">
          Create New Note
        </h1>

        {/* The Card/Form Container */}
        {/* Removed 'card' for a flatter, more editor-like feel,
            but keeping the padding and background differentiation. */}
        <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
          <form id="note-form" onSubmit={handleSubmit}>
            {/* Title Input: Larger and more prominent */}
            <div className="form-control mb-6">
              <label className="label hidden">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Untitled Note"
                // Made the input look like a main title field
                className="input text-3xl font-bold border-none bg-transparent focus:outline-none focus:ring-0 px-0 h-auto"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Textarea: Focused on editing */}
            <div className="form-control mb-6">
  <label className="label">
    <span className="label-text text-lg font-medium text-gray-700 dark:text-gray-300 mb-5">Content</span>
  </label>
  <textarea
    placeholder="Write your note here..."
    // KEY CHANGES: Adds shadow and transition on focus
    className="textarea textarea-bordered w-full h-48 resize-y text-base bg-inherit
               shadow-md transition duration-300 ease-in-out
               focus:shadow-xl focus:border-primary focus:ring-2 focus:ring-primary/50"
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />
</div>
            
            {/* The action buttons are now primarily in the header,
                but we can keep this for a bottom-of-form confirmation */}
            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? "Creating..." : "Save Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};
export default CreatePage;