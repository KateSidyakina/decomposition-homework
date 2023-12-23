export default function InfoBlock({title, link, children, headerLink}) {
  return (
    <div className="component">
      <h2>InfoBlock</h2>
      {/* данный компонент отвечает за вывод блоков информации под поиском */}
      {/* для вывода заголовков используется компонент Link, данные для которого мы берём из props.title и props.link */}
      {/* для вывода содержимого блока используется props.children */}
      {/* для вывода ссылки в шапке блока используется props.headerLink (как пример, ссылка "эфир" в блоке "телепрограмма") */}
    </div>
  )
}