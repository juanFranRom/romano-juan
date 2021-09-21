import { OverlayContainer } from "./elements"

export const Overlay = ({ display, handleDetail = null }) => {
    return display ? <OverlayContainer active onClick={handleDetail} /> : <OverlayContainer/>
}

export default Overlay
