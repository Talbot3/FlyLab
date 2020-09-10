import { useSize } from 'react-use';

const Demo = () => {
    const [sized, { width, height }] = useSize(
        ({ width }) => <div style={{ background: 'red' }}>Size me up! ({width}px)</div>,
        { width: 100, height: 100 }
    );

    return (
        <div>
            {sized}
        </div>
    );
};

export default Demo;