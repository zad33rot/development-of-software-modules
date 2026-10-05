interface CommentPageProps {
    params: Promise<{ id: string; commentId: string }>;
}

export default async function CommentPage({ params }: CommentPageProps) {
    const { id, commentId } = await params;
    return (
        <div>
            <h1>Комментарий {commentId}</h1>
            <p>К посту №{id}</p>
        </div>
    );
}