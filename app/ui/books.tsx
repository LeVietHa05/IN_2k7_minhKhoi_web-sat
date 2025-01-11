import Image from "next/image";

interface BooksProps {
  title: string;
  list: {
    imgLink: string;
    width: number;
    height: number;
  }[];
}

export default function Books({ title, list }: BooksProps) {
  return (
    <div>
      <div className="text-3xl font-semibold">
        <div className="mb-4">{title}</div>
        <hr />
      </div>
      <div className="grid grid-cols-3 mt-10 px-20">
        {list.map((item, index) => {
          return (
            <div key={index} className="relative group rounded-lg w-fit ">
              <Image
                src={item.imgLink}
                width={item.width}
                height={item.height}
                alt={item.imgLink}
              />
              <div className="group-hover:flex hidden transition-all rounded-lg absolute inset-0 backdrop-blur-sm bg-transparent bg-transparent-dark-30 flex justify-center items-center text-2xl text-gray-50">
                View
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
