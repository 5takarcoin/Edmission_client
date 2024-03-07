type DetailsType = {
  icon: string;
  key: string;
  value: string;
};

export default function DetailCard({ details }: { details: DetailsType[] }) {
  return (
    <div>
      {details.map((detail) => (
        <div>
          <span>{detail.icon}</span>
          <span>
            {detail.key}: {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
}
