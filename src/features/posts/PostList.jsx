import { useSelector, useDispatch } from "react-redux";
import { approvePost, rejectPost } from "./postsSlice";
import { useState } from "react";
import PostModal from "./PostModal";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const [activeStatus, setActiveStatus] = useState('pending');
    const visiblePosts = posts.filter(post => post.status === activeStatus);


    const [selectedPost, setselectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);

    const openModal = (post) => {
        setselectedPost(post);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setselectedPost(null);
    }

    const handleApprove = (id) => {
        dispatch(approvePost(id));
    };

    const handleReject = (id) => {
        dispatch(rejectPost(id));
    };

    const handleCheckboxChange = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selected) => selected !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleSelectAll = () => {
        const pendingIds = posts
        .filter((post) => post.status === 'pending')
        .map((post) = post.id);
        const allSelected = pendingIds.every((id) => selectedIds.includes(id));

        if (allSelected) {
            // Deselect all pending
            setSelectedIds((prev) => prev.filter(id => !pendingIds.includes(id)));
          } else {
            // Select all pending
            setSelectedIds(pendingIds);
          }
    };

    const batchApprove = () => {
        selectedIds.forEach(id => dispatch(approvePost(id)));
        setSelectedIds([]);
    };
    
    const batchReject = () => {
        selectedIds.forEach(id => dispatch(rejectPost(id)));
        setSelectedIds([]);
    };

    const isAllSelected = posts
        .filter(post => post.status === 'pending')
        .every(post => selectedIds.includes(post.id));

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Moderation Queue</h2>

            {/* Batch Actions */}

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <input 
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    />
                    <span className="text-sm">Select All</span>
                </div>
                <div className="space-x-2">
                    <button
                        onClick={batchApprove}
                        disabled={selectedIds.length === 0}
                        className="px-3 py-1 rounded text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
                    >
                        Approve Selected
                    </button>
                    <button
                        onClick={batchReject}
                        disabled={selectedIds.length === 0}
                        className="px-3 py-1 rounded text-white bg-red-600 hover:bg-red-700 disabled:bg-gray-400"
                    >
                        Reject Selected
                    </button>
                    <span className="text-sm text-gray-500">
                        {selectedIds.length} selected
                    </span>
                </div>
            </div>

            <div className="flex gap-4 mb-4">
  {['pending', 'approved', 'rejected'].map(status => {
    const count = posts.filter(post => post.status === status).length;
    const isActive = activeStatus === status;

    return (
      <button
        key={status}
        className={`px-3 py-1 rounded ${
          isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
        }`}
        onClick={() => setActiveStatus(status)}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
      </button>
    );
  })}
</div>


            <div className="space-y-4">
                {visiblePosts.map(post => (
                    <div key={post.id} 
                    className={`p-4 border rounded shadow-sm bg-white ${
                        selectedIds.includes(post.id) ? 'border-blue-400' : ''
                      }`}>
                        <div className="flex justify-between items-center">
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                className="mt-1 mr-2"
                                checked={selectedIds.includes(post.id)}
                                disabled={post.status !== 'pending'}
                                onChange={() => handleCheckboxChange(post.id)}
                            />

                            <div className="flex-grow">
                                <h3
                                 onClick={() => openModal(post)}
                                 className="text-lg font-semibold cursor-pointer hover:underline"
                                 >
                                 {post.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Posted by <strong>{post.author.username}</strong> | Reason: {post.reportedReason}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {new Date(post.reportedAt).toLocaleString}
                                </p>
                            </div>
                            <div>

                            <span className={`px-2 py-1 rounded text-xs ${
                                post.status === 'approved'
                                ? 'bg-green-200'
                                : post.status === 'rejected'
                                ? 'bg-red-200'
                                : 'bg-yellow-100'
                            }`}>
                                {post.status}
                            </span>
                            </div>
                        </div> 

                        {/* Action Buttons */}
                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => handleApprove(post.id)}
                                disabled={post.status !== 'pending'}
                                className={`px-3 py-1 rounded text-white text-sm font-medium ${
                                    post.status !== 'pending'
                                      ? 'bg-gray-400 cursor-not-allowed'
                                      : 'bg-green-600 hover:bg-green-700'
                                }`}
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => handleReject(post.id)}
                                disabled={post.status !== 'pending'}
                                className={`px-3 py-1 rounded text-white text-sm font-medium ${
                                    post.status !== 'pending'
                                      ? 'bg-gray-400 cursor-not-allowed'
                                      : 'bg-red-600 hover:bg-red-700'
                                }`}
                            >
                                Reject
                            </button>
                            <button
                             onClick={() => openModal(post)}
                             className="ml-auto text-blue-600 text-sm underline"
                            >
                                View
                            </button>
                        </div> 
                    </div>   
                ))}
            </div>

            <PostModal
             isOpen={isModalOpen}
             onClose={closeModal}
             post={selectedPost}
             />
        </div>
    );
};

export default PostList;