import React from 'react';
import Thread from '../Thread/Thread';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    parentIdHovered: string | null;
    onThreadHover: (parentIdHovered: string | null) => void;
}

const renderThreads = (props: ThreadGroupProps) => {
    let threads = [];

    for (let i = 0; i <= props.comment.depth; i++) {
        threads.push(
            <Thread
                key={i}
                isRootThread={i === props.comment.depth}
                parentId={props.parentIdBreadcrumbs[i]}
                depth={i}
                parentIdHovered={props.parentIdHovered}
                onThreadHover={(parentIdHovered) => props.onThreadHover(parentIdHovered)}
            />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {
    return (
        <div className="thread-group">
            {renderThreads({...props})}
        </div>
    );
}

export default ThreadGroup;
