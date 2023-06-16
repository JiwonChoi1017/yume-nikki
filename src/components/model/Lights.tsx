/**
 * 照明.
 *
 * @returns {JSX.Element} 照明.
 */
const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[100, 10, -50]} intensity={5} castShadow />
      <pointLight
        position={[-100, -100, -100]}
        intensity={5}
        color="rgb(214, 253, 255)"
      />
    </>
  );
};

export default Lights;
