import { useRouter } from 'next/router'
import Link from 'next/link'


function DiscoverMenu () {

    const router = useRouter();
    const currentRoute = router.pathname


    return (
        <div className="w-inherit px-6 lg:px-48 border-b-2 border-gray-300 py-2 lg:py-4 dark:text-white">
            <div className="text-center font-bold text-xl lg:text-2xl  uppercase ">Discovering</div>
            <div  className="flex justify-between hide dark:text-gray-200 font-semibold space-x-4 lg:mt-6 mt-3 lg:text-xl capitalize">
                <Link href="/latestNews" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-500 dark:hover:bg-gray-500 ${currentRoute === '/latestNews' || currentRoute === '/explore' ? 'bg-green-300 dark:bg-gray-500' : "" }`}>
                        News
                    </a>
                </Link>
                <Link href="/trendingCoin" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-500 dark:hover:bg-gray-500 ${currentRoute === '/trendingCoin' ? 'bg-green-300 dark:bg-gray-500' : "" }`}>
                        Trending
                    </a>
                </Link>
                <Link href="/blogs" passHref>
                    <a className={`cursor-pointer px-4 lg:px-4 lg:py-2 rounded-md hover:bg-green-500 dark:hover:bg-gray-500 ${currentRoute === '/blogs' ? 'bg-green-300 dark:bg-gray-500' : "" }`}>
                        Blogs
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default DiscoverMenu