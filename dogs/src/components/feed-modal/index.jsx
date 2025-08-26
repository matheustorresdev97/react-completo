import { useEffect } from "react";
import styles from "./feed-modal.module.css";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../helper/error";
import { Loading } from "../helper/loading";
import { PHOTO_GET } from "../../api";
import { PhotoContent } from "../photo-content";

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
