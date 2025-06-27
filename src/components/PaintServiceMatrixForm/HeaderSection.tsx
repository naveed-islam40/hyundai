const HeaderSection = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-red-600 font-bold text-sm mb-4">SERVICES & LABOR</h2>
      <div className="text-right">
        <span className="text-red-600 font-bold hidden base-xs:block">
          Customer:
        </span>{" "}
        {name}
      </div>
    </div>
  );
};

export default HeaderSection;
