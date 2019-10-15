import React from 'react';
import './Thread.scss';

interface ThreadProps {
    depth: number;
    depthHovered: number | null;
    onThreadHover: (depthHovered: number) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    return (
        <div
            className="thread"
            onMouseOver={() => props.onThreadHover(props.depth)}>
            {/* TODO onMouseOut */}
            <i className={
                props.depthHovered === props.depth
                ? "thread-line-hovered"
                : "thread-line"
            } />
        </div>
    );
}

export default Thread;
