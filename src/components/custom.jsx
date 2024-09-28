
const CustomIcon = ({ size = '60px', color = 'white', backgroundColor = 'black' }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: '10px', // Optional: for rounded corners
        fontSize: '40px', // Adjust the font size
        fontWeight: 'bold', // Make the letters bold
      }}
    >
      ex
    </div>
  );
};


const CustomCpp = ({ size = '60px', color = 'white', backgroundColor = '#004482' }) => {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #004482, #002244)',
          color: color,
          borderRadius: '10px', // Optional: for rounded corners
          fontSize: '30px', // Adjust the font size
          fontWeight: 'bold', // Make the letters bold
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        C++
      </div>
    );
  };

  const CustomPython = ({ size = '60px', backgroundColor = 'black' }) => {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          borderRadius: '10px', // Optional: for rounded corners
          fontSize: '30px', // Adjust the font size
          fontWeight: 'bold', // Make the letters bold
          background: 'linear-gradient(90deg, #004482, #FFD43B)', // Gradient from blue to yellow
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', // Ensure text is transparent
          color: 'transparent',
        }}
      >
        Py
      </div>
    );
  };

const CustomSQL = ({ size = '60px', backgroundColor = 'black' }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        background: 'linear-gradient(90deg, #FF7F50, #FF4500)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        borderRadius: '10px', // Optional: for rounded corners
        fontSize: '30px', // Adjust the font size
        fontWeight: 'bold',
      }}
    >
      SQL
    </div>
  );
};
  


export { CustomIcon, CustomCpp, CustomPython, CustomSQL };

