import { faCheck, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { notifications } from "@mantine/notifications"

const successNotification = (title: string, message: string) => {

    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <FontAwesomeIcon icon={faCheck} />,
        color: "teal",
        withBorder: true,
        className: "!border-green-500"
    })
}
const errorNotification = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <FontAwesomeIcon icon={faX} />,
        color: "red",
        withBorder: true,
        className: "!border-red-500"
    })
}
export {successNotification,errorNotification}