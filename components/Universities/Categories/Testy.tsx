import React from 'react';

interface ReviewProps {
  rating: number; // Rating score (out of 5)
  title: string; // Review title
  content: string; // Review content
  author?: string; // Optional author name
}

const Testy: React.FC<ReviewProps> = ({
  rating,
  title,
  content,
  author,
}) => {
  // Calculate star icons based on rating
  const starIcons = Array(5)
    .fill('far fa-star')
    .map((_, index) => (index < rating ? 'fas fa-star' : _));

  return (
    <div className="flex flex-col border rounded-lg p-4 shadow-md">
      {author && (
        <h4 className="text-lg font-bold mb-2">{author}</h4>
      )}
      <div className="flex items-center mb-2">
        {starIcons.map((icon, index) => (
          <i key={index} className={`mr-1 text-xl ${icon} text-yellow-400`}></i>
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Testy;
