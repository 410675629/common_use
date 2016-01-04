

## reactjs和angularjs在某种程度上可以看出fb和google两家公司的文化
### facebook喜欢独立，小巧，快速，创新。
>$ 抛开flux,react route不谈，reactjs作为view本身非常独立，不仅可以在浏览器上用，还可以在server端结合nodejs做模板。除了独立，reactjs还很灵活小巧，用起来像拼lego的积木，一个component接着另一个component。在性能方面，由于运用了virtual dom技术，reactjs只在调用setstate的时候会更新dom，而且还是先更新virtual dom，然后和实际dom比较，最后再更新实际dom。这个过程比起angularjs, knockoutjs的bind方式来说，一是更新dom的次数少，二是更新dom的内容少，速度肯定是快了的。另外reactjs用了jsx，这个相当于半个新语言了。google发展全面，组织结构清晰，分工明确，业务扩展虽缓慢，但是发展良好。
### angularjs是一个m-v-whateever framework。

>$ framework的一个特点就是很全面，除了m-v-whatever面面俱到，它还自带了很多$开头的service，$http, $route, $q(defer),$cookie等等，基本上只要你在做web开发用过的东西，它都有一个。angularjs的架构清晰，分工明确，model，view，controller谁在什么时候做什么事情说的很清楚，整个框架充满了DI的思路，耦合性非常低，对象都是被inject的，也就是说每个对象都可以轻易被替换而不影响其他对象。此外，angularjs的扩展性不错，但是略微有点笨拙，你可以自定义directive，当然如果嫌麻烦，只封装到controller+html很多时候也够了。</br>
###至于应用场景根据上述总结，我个人觉得企业项目，或者说业务比较正规的用angularjs比较好。对于那种倾向于比较好玩的，有趣的，有创意的项目用reactjs比较好。企业文化这东西还是很重要的，这两个东西一直做下去，reactjs会越来越像fb， angularjs会越来越像google。