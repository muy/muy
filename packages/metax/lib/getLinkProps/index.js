import humansLink from "../link/humansLink"
import maskIconLink from "../link/maskIconLink"
import fluidIconLink from "../link/fluidIconLink"

const getLinkProps = (props = {}) => {
  const linkProps = {}

  const { fluidIcon, humans, maskIcon, siteName, themeColor } = props

  fluidIcon &&
    (linkProps.fluidIcon = fluidIconLink({ href: fluidIcon, title: siteName }))

  humans && (linkProps.humans = humansLink({ href: humans }))

  maskIcon &&
    (linkProps.maskIcon = maskIconLink({
      color: themeColor,
      href: maskIcon,
    }))

  return linkProps
}

export default getLinkProps
