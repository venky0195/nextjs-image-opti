export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>random-working-commit-23:asadasdasd</p>}
    </div>
  )
}
export default Home
