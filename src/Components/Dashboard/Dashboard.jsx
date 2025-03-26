import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useLanguage } from "../../LanguageContext"; // Import the language context

const Dashboard = () => {
  const { language, toggleLanguage } = useLanguage(); // Access language and toggle function
  const [comments, setComments] = useState([]);
  const [editingComment, setEditingComment] = useState(null);
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://d1-jellyfun.vilfront.workers.dev/api/posts/hello-world/comments');
      setComments(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`https://d1-jellyfun.vilfront.workers.dev/api/comments/${id}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const editComment = (comment) => {
    setEditingComment(comment.id);
    setAuthor(comment.author);
    setBody(comment.body);
  };

  const updateComment = async (id) => {
    try {
      await axios.put(`https://d1-jellyfun.vilfront.workers.dev/api/comments/${id}`, { author, body });
      setEditingComment(null);
      setAuthor('');
      setBody('');
      fetchComments();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2 className="dashboard-title">{language === "es" ? "Administrar comentarios" : "Manage Comments"}</h2>
        
        {/* Language Toggle Button */}
        
        
        {comments.length === 0 ? (
          <p className="loading-message">
            {language === "es" ? "No hay comentarios disponibles." : "No comments available."}
          </p>
        ) : (
          comments.map((comment) => (
            <div className='todo'>
                <div className="dashboard-name">
                    {language === "es" ? "Bienvenido al Panel de Administración" : "Welcome to the Admin Dashboard"}
                    <button onClick={toggleLanguage} className="edit-btn">
                        {language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
                    </button>
                </div> 
                <div key={comment.id} className="comment-item">
                    {editingComment === comment.id ? (
                        <div className="comment-container">
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder={language === "es" ? "Autor" : "Author"}
                            className="input-field"
                        />
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder={language === "es" ? "Cuerpo" : "Body"}
                            className="textarea-field"
                        />
                        <div>
                            <button
                            onClick={() => updateComment(comment.id)}
                            className="edit-btn"
                            >
                            {language === "es" ? "Guardar" : "Save"}
                            </button>
                            &nbsp;
                            <button onClick={() => setEditingComment(null)} className="delete-btn">
                            {language === "es" ? "Cancelar" : "Cancel"}
                            </button>
                        </div>
                        </div>
                    ) : (
                        <div className="comment-container">
                        <p className="comment-text"><strong>{comment.author}</strong>: {comment.body}</p>
                        <div>
                            <button onClick={() => editComment(comment)} className="edit-btn">
                            {language === "es" ? "Editar" : "Edit"}
                            </button>
                            &nbsp;
                            <button onClick={() => deleteComment(comment.id)} className="delete-btn">
                            {language === "es" ? "Eliminar" : "Delete"}
                            </button>
                        </div>
                        </div>
                    )}
                </div>
            </div>
            
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
