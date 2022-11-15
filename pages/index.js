export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>contentfly-e2e-tests:05dd28a:run-counter-1</p>}
    </div>
  )
}
export default Home
