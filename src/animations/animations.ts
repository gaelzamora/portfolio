export const downToUp = {
    hidden: {
        y: '20%',
        transition: {
            duration: 1
        }
    },
    visible: {
        y: 0,
        transition: {   
            duration: 1
        }
    }
}

export const itemOpacity = {
    hidden: {
        opacity: 0,
        y: '20%'
    },
    visible: ({delay}: any) => ({
        opacity: 1,
        y: 0,
      transition: {
        delay,
        duration: 1
      }
    })
  }