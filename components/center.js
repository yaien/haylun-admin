const Center = props => (
  <div className="center">
    {props.children}
    <style jsx>{`
      .center {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
      }
    `}</style>
  </div>
)

export default Center
