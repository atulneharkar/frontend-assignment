import "./Card.scss";

function Card({ card }) {
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <a href={`https://www.google.com/search?q=${card.Title}`} target="_blank">
        <img
          className="rounded-t-lg w-full"
          src={card.Image.data.attributes.url}
          alt={card.Title}
        />

        <div className="p-3 text-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2 mobile:mb-0 mobile:text-center break-words overflow-hidden whitespace-nowrap text-ellipsis">
            {card.Title}
          </h5>
          <p className="text-gray-700 text-sm mobile:hidden overflow-hidden whitespace-nowrap text-ellipsis">
            {card.Body}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
