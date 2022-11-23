function Home(){
  return (
    <Card
      txtcolor="black"
      header="Jeff's Bad Bank"
      title="Welcome to the Jeff's bank"
      text="Please make sure to log in before making any deposits or withdrawals."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
