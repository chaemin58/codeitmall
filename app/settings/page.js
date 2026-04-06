import ThemeSelect from "./components/ThemeSelect";


export const metadata = {
  title: '설정',
}
export default function Settings() {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>설정 페이지</h1>
      <ThemeSelect />
    </div>
  )
}
