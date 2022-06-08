interface PersonComponentProps {
    firstname: string;
    lastname: string;
}

export default function PersonComponent(props: PersonComponentProps) {
    return (
        <div>
            Hallo {props.firstname} {props.lastname}
        </div>
    )
}
