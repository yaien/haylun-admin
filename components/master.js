const Master = props => {
  return (
    <div className="master">
      {props.children}
      <style jsx>{`
        .master {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          right: 0;
        }
      `}</style>
    </div>
  )
}

export default Master
