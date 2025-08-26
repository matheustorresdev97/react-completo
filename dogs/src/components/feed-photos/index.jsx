import { useEffect } from "react";
import styles from "./feed-photos.module.css";
import { useFetch } from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import { Error } from "../helper/error";
import { Loading } from "../helper/loading";
import { FeedPhotosItem } from "../feed-photos-item";

export function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
}
