import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import Comment from '../Comment/Comment';
import ActionButtons from '../ActionButtons/ActionButtons';

interface VoteableCommentProps {
    comment: CommentModel;
    addNewComment: (newComment: CommentModel) => void;
    isCollapsed: boolean;
    onExpandClick: (parentIdClicked: string) => void;
}

const calcPaddingLeftPx = (depth: number): number => {
    const threadWidthPx = 16;
    const threadMarginLeftPx = 5;
    const singleThreadWidthPx = threadWidthPx + threadMarginLeftPx;

    const paddingLeftFromRootThread = singleThreadWidthPx + 15;

    if (depth === 0) {
        return paddingLeftFromRootThread;
    }

    const paddingLeftFromThreadGroup = singleThreadWidthPx * depth

    return paddingLeftFromRootThread + paddingLeftFromThreadGroup;
}

const VoteableComment: React.FC<VoteableCommentProps> = (props) => {
    return (
        <>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.comment.depth) - 33}}>
                <ActionButtons
                    commentId={props.comment.id}
                    isCollapsed={props.isCollapsed}
                    onExpandClick={props.onExpandClick}
                />
            </div>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.comment.depth)}}>
                <Comment {...props} />
            </div>
        </>
    );
}

export default VoteableComment;
