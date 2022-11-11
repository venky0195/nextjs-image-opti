export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>contentfly-management-service:ab123:run-counter-3</p>}
    </div>
  )
}
export default Home
