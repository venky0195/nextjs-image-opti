export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>DEPLOYMENT_IDENTIFIER</p>}
    </div>
  )
}
export default Home
