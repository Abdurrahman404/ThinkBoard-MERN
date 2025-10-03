import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom"; // use react-router-dom instead of react-router
import api from "../lib/axios";
 
import toast from "react-hot-toast";
import { set } from "mongoose";

 

const NoteCard = ({ note, onDelete }) => {
  
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent navigation when clicking delete button
    
    if(!window.confirm("Are you sure you want to delete this note?")) return ; 

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id));  
      toast.success("Note deleted successfully");
       } catch (error) {
      console.error("Error deleting note:", error);
      
      
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#0048ff]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              type="button"
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
