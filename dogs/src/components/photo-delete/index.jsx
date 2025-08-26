import { PHOTO_DELETE } from "../../api";
import styles from "./photo-delete.module.css";
import {useFetch} from "../../hooks/useFetch";

export function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem centeza que deseja deletar essa foto?");

    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};
