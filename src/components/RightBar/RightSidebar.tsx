interface RightSidebarProps {
  formikValues: any;
  getTotalCost: () => number;
  getBreakdown: () => Record<string, { service: string; cost: number }[]>;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  getTotalCost,
  getBreakdown,
}) => {
  const breakdown = getBreakdown();
  const total = getTotalCost();

  return (
    <aside className="w-1/3 p-4 border-l">
      <h2 className="text-lg font-bold mb-2">Panel Summary</h2>
      {Object.entries(breakdown).map(([panel, services]) => (
        <div key={panel} className="mb-2">
          <strong>{panel}</strong>
          <ul className="pl-4">
            {services.map(({ service, cost }) => (
              <li key={service}>
                {service}: ${cost.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <hr className="my-4" />
      <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
    </aside>
  );
};

export default RightSidebar;