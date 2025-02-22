const Footer = ({ items }) => {
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / items.length) * 100;

  return (
    <div className="footerWrapper">
      {percentage === 100
        ? "Shopping Done"
        : `Total Items: ${items.length}. Completed Items: ${numPacked} - ${percentage}%`}
    </div>
  );
};

export default Footer;
