const Center = props => (
  <div className="center">
    {props.children}
    <style jsx>{`
      .center {
        position: absoulute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Center
