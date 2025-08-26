import { useState } from "react";
import { FeedModal } from "../../components/feed-modal";
import { FeedPhotos } from "../../components/feed-photos";

export function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  <div>
    {modalPhoto && (
      <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
    )}

    <FeedPhotos setModalPhoto={setModalPhoto} />
  </div>;
}
