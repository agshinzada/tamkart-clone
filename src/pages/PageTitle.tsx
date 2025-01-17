const PageTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-[32px] tablet:text-[40px] laptop:text-[48px] text-white font-bold">
      {title}
    </h3>
  );
};

export default PageTitle;
