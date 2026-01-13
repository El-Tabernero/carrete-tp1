import styles from "./Comments.module.css";
import { useComments } from "../Hooks/useComments";

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("es-AR");
};

const Comments = ({ movieId }) => {
  const { data: comments = [], isLoading, error } = useComments(movieId);

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error al cargar comentarios</p>;

  if (comments.length === 0) {
    return <p className={styles.empty}>Todavía no hay comentarios.</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.h1}>💬 Comentarios</h3>

      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentCard}>
          <div className={styles.header}>
            <strong>{comment.nameUser}</strong>
            <span className={styles.date}>
              {formatDate(comment.date)}
            </span>
          </div>

          <p className={styles.text}>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;