import { View, Form, Item, Input, Label, Button } from 'native-base';
export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Form>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item last>
                    <Input placeholder="Password" />
                </Item>
            </Form>
        );
    }
}