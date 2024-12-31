<div class="navbar bg-primary px-32">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">daisyUI</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="avatar btn btn-circle btn-ghost">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<ul
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				<li>
					<a class="justify-between" href="/crm/dashboard">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
                <li>
                    <form action="/crm/auth?/logout" method="POST" class="w-full">
                        <button type="submit">
                            Logout
                        </button>
                    </form>
                </li>
			</ul>
		</div>
	</div>
</div>
