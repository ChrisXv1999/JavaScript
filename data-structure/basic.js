/**
 * 数组 链表 队列 栈 都是线性表结构
 * 线性表有两种存储结构 顺序存储结构 链式存储结构
 * 顺序存储结构 占用的内存空间是连续的 相邻数据元素之间 物理内存上的存储位置也相邻
 * 数组修改 根据下标查找的时间复杂度是O(1)
 * 
 */

/**
 * 链表 
 * 链表（Linked list） 通过“指针”将一组零散的内存块串联起来使用，它并不需要一块连续的内存空间。
 * 最常见的链表结构有：单链表、循环链表和双向链表
 * 后继指针 next
 * 优点：存储空间不必事先分配，在需要存储空间的时候可以临时申请，不会造成空间的浪费；链表最大的优点在于可以灵活的添加和删除元素，插入、移动、删除元素的时间效率远比数组高。
 * 缺点：不仅数据元素本身的数据信息要占用存储空间，指针也需要占用存储空间，链表结构比数组结构的空间开销大。
 * 
 * 
 * 与区别区别 
 * 支持动态扩容
 */

/**
 * 栈 stack 是一种“操作受限”的线性表，只允许在一端插入和删除数据。后进者先出，先进者后出，这就是典型的“栈”结构。LIFO
 * 
 */

/**
 * 队列（Queue） ：一种线性表数据结构，是一种只允许在表的一端进行插入操作，而在表的另一端进行删除操作的线性表。
 * 
 */