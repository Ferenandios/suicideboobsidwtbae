import { FC } from "react";
import { IGalleryItem } from "../../../../../../../types/types";
import Image from "next/image";

const Item: FC<{ item: IGalleryItem }> = ({ item }): JSX.Element => {
  const src = item.image;
  return (
    <>
      <div className="flex w-full lg:w-[272px] xl:w-[502px] 2xl:w-[400px]">
        {src && (
          <Image className="w-full" src={src} alt={`Gallery Item ${item.id}`} />
        )}
      </div>
    </>
  );
};

export default Item;
