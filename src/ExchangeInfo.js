const ExchangeInfo = ({ cards1to2, cards2to1 }) => (
  <>
    <label>
      <span>Plaatjes van verzamelaar 1 naar verzamelaar 2: </span>
      <ul>
      {
        cards1to2?.map(i => <li className="transfer" key={i}>{i}</li>)
      }
    </ul>
    </label>
    <label>
      <span>Plaatjes van verzamelaar 2 naar verzamelaar 1: </span>
      <ul>
      {
        cards2to1?.map(i => <li className="transfer" key={i}>{i}</li>)
      }
    </ul>
    </label>
  </>
)

export default ExchangeInfo;
