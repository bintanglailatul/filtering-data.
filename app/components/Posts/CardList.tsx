// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardList = ({ children }: any) => {
    return (
      <div className="bg-[tomato] w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default CardList;
  