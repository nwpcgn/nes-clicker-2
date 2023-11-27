<script>
	export let fill = 'none' //"#FBFFFA"
	export let stroke = '#333333'
	export let strokeWidth = 1
</script>

<!-- prettier-ignore -->
<svg viewBox="0 0 1600 960" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><path d="M1600 0L1600 0L1600 960L0 960L0 0L1600 0Z" id="path_1"/><clipPath id="clip_1"><use xlink:href="#path_1" clip-rule="evenodd" fill-rule="evenodd"/></clipPath></defs>
    <g id="city-svg" clip-path="url(#clip_1)">
        <path id="city-bg" fill={fill} stroke={stroke} stroke-width={strokeWidth} d="M1600 0L1600 0L1600 960L0 960L0 0L1600 0Z"/>
        <path id="lake" d="M31.6594 372.669C20.3342 233.734 -40.9669 172.552 -52.3528 167.771L-185.204 188.765C-152.819 430 -59.9789 895.987 52.3053 830.052C187.508 750.66 100.801 637.286 86.7692 618.94C86.2345 618.24 85.8053 617.679 85.498 617.263C77.1265 605.931 42.9846 511.604 31.6594 372.669L31.6594 372.669Z" fill="#A1F0F0" fill-rule="evenodd" stroke="none"/>
        <path id="lake-center" d="M849.5 655.5C753.99 619.52 704.833 659.167 694 676.5C642.572 755.331 703.876 787.097 761.325 816.865C780.396 826.748 799.043 836.41 813 847.5C869 892 954 914.5 1040 858.5C1108.8 813.7 1090.5 633 968 698C940.905 715.269 929.945 706.652 910.097 691.049C896.614 680.449 879.03 666.624 849.5 655.5L849.5 655.5Z" fill="#A1F0F0" fill-rule="evenodd" stroke="none" />
        <slot></slot>
    </g>
</svg>

<style global>
	#city-svg g {
		transition: all var(--dura) ease var(--del);
	}
</style>
