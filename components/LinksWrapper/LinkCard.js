import ApiService from "../../pages/service/ApiService";
import styles from './LinkCard.module.css'

export default function LinkCard({ title, url, id , updateCallback}) {

  const handleDelete = (e) => {
    e.preventDefault();
    ApiService.deleteLink(id)
      .then((isOk) => {
        if (isOk) {
          updateCallback();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <a href={url} className={styles.url}>{url}</a>
        <button onClick={handleDelete} className={styles.cancelButton}>{" X "}</button>
    </div>
  );
}
